"use client";

import { CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { verifyPayment } from "@/services/Payment";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Loading from "@/components/shared/Loader";
import { useSearchParams } from "next/navigation";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

export default function VerifyOrderPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    const getData = async () => {
      const orderId = searchParams.get("order_id");

      if (!orderId) {
        setError("No order ID provided");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      setOrderData(null);

      try {
        const res = await verifyPayment(orderId);
        if (res?.success && res?.data?.[0]) {
          setOrderData(res.data[0]);
        } else {
          setError(res?.message || "Order could not be verified.");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (!hasFetchedRef.current) {
      hasFetchedRef.current = true;
      getData();
    }
  }, [searchParams]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (error) return <div className="text-red-600 p-4">{error}</div>;

  if (!orderData) return <div className="p-4">No data found.</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Order Verification</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold">Order ID:</dt>
              <dd>{orderData.order_id}</dd>
              <dt className="font-semibold">Amount:</dt>
              <dd>
                {orderData.currency} {orderData.amount.toFixed(2)}
              </dd>
              <dt className="font-semibold">Status:</dt>
              <dd>
                <Badge
                  variant={
                    orderData.bank_status === "Success"
                      ? "default"
                      : "destructive"
                  }
                >
                  {orderData.bank_status}
                </Badge>
              </dd>
              <dt className="font-semibold">Date:</dt>
              <dd>{new Date(orderData.date_time).toLocaleString()}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold">Method:</dt>
              <dd>{orderData.method}</dd>
              <dt className="font-semibold">Transaction ID:</dt>
              <dd>{orderData.bank_trx_id}</dd>
              <dt className="font-semibold">Invoice No:</dt>
              <dd>{orderData.invoice_no}</dd>
              <dt className="font-semibold">SP Code:</dt>
              <dd>{orderData.sp_code}</dd>
              <dt className="font-semibold">SP Message:</dt>
              <dd>{orderData.sp_message}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold">Name:</dt>
              <dd>{orderData.name}</dd>
              <dt className="font-semibold">Email:</dt>
              <dd>{orderData.email}</dd>
              <dt className="font-semibold">Phone:</dt>
              <dd>{orderData.phone_no}</dd>
              <dt className="font-semibold">Address:</dt>
              <dd>{orderData.address}</dd>
              <dt className="font-semibold">City:</dt>
              <dd>{orderData.city}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verification Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              {orderData.is_verify === 1 ? (
                <>
                  <CheckCircle className="text-green-500" />
                  <span>Verified</span>
                </>
              ) : (
                <>
                  <AlertCircle className="text-yellow-500" />
                  <span>Not Verified</span>
                </>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/student/payment-history" className="w-full">
              <Button className="w-full bg-purple-600">View Orders</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
