import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AlertCircle, CheckCircle2, Home } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  amount: z.string().min(1, { message: "Amount is required" }),
  cardNumber: z.string().regex(/^[0-9]{16}$/, { message: "Please enter a valid 16-digit card number" }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, { message: "Please enter a valid expiry date (MM/YY)" }),
  cvv: z.string().regex(/^[0-9]{3,4}$/, { message: "Please enter a valid CVV" })
});

type FormData = z.infer<typeof formSchema>;

const Payment = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [paymentDetails, setPaymentDetails] = React.useState<FormData | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      amount: "",
      cardNumber: "",
      expiryDate: "",
      cvv: ""
    }
  });

  const onSubmit = (data: FormData) => {
    // Simulate payment processing
    setTimeout(() => {
      setIsSuccess(true);
      setPaymentDetails(data);
      toast({
        title: "Payment Successful! 🎉",
        description: "Your payment has been processed successfully.",
        duration: 5000,
      });
    }, 1500);
  };

  if (isSuccess && paymentDetails) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-green-600">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-2" />
              Payment Successful
            </CardTitle>
            <CardDescription className="text-center">
              Thank you for your payment. Here's your confirmation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="bg-green-50 border-green-200">
              <AlertCircle className="h-4 w-4 text-green-600" />
              <AlertTitle>Transaction Complete</AlertTitle>
              <AlertDescription>Your payment has been processed successfully.</AlertDescription>
            </Alert>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-semibold">₹{paymentDetails.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span>{paymentDetails.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span>{paymentDetails.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Card Number:</span>
                <span>XXXX-XXXX-XXXX-{paymentDetails.cardNumber.slice(-4)}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <Button className="w-full" variant="outline" onClick={() => setIsSuccess(false)}>
              Make Another Payment
            </Button>
            <Button 
              className="w-full" 
              variant="secondary"
              onClick={() => navigate("/")}
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Make a Payment</CardTitle>
          <CardDescription>Enter your payment details below.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <Input placeholder="1234567890123456" maxLength={16} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiry Date</FormLabel>
                      <FormControl>
                        <Input placeholder="MM/YY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input type="password" maxLength={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Processing..." : "Submit Payment"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
