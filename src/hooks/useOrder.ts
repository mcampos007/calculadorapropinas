import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";
// import Menuitem from "../components/Menuitem";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderitem) => orderitem.id === item.id);
    if (itemExist) {
      const orderUpdate = order.map((orderItem) =>
        orderItem.id === item.id
          ? {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          : orderItem
      );

      setOrder(orderUpdate);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    // console.log("eliminando....", id);
    setOrder(order.filter((item) => item.id != id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}
