"use client";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import React from "react";

const OrderPage = () => {
  const router = useRouter();
  const cart = useCart();
  console.log("cart: ", cart);

  const onClick = () => {
    cart.removeAll();
    router.push("/");
  };

  return (
    <div className="flex w-full h-full justify-center items-center border">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-[200px]">
          Your order has been completed
        </h1>
        <Button onClick={onClick} className="w-[180px]">
          GO Back To Store
        </Button>
      </div>
    </div>
  );
};

export default OrderPage;
