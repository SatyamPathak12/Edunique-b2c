"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StudentSidebarWrapper from "@/components/student-sidebar-wrapper";

interface Purchase {
  id: number;
  image: string;
  courseName: string;
  date: string;
  price: string;
  paymentBy: string;
}

export default function PurchaseHistory() {
  // Sample purchase data
  const purchases: Purchase[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: "/placeholder.svg?height=60&width=60",
    courseName: "STEM Diploma in Technology Programs",
    date: "20 Jun 2025",
    price: "₹5,000.00",
    paymentBy: "Visa****9061",
  }));

  const handleInvoice = (id: number) => {
    console.log("Generating invoice for purchase:", id);
    // Implement invoice generation functionality here
  };

  return (
    <StudentSidebarWrapper>
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 h-fit">
        <h1 className="text-2xl font-semibold mb-6">Purchase history</h1>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-pink-100 text-lg">
              <TableRow>
                <TableHead className="text-pink-500 font-medium w-16">
                  S.N.
                </TableHead>
                <TableHead className="text-pink-500 font-medium w-24">
                  Image
                </TableHead>
                <TableHead className="text-pink-500 font-medium">
                  Course Name
                </TableHead>
                <TableHead className="text-pink-500 font-medium">
                  Date
                </TableHead>
                <TableHead className="text-pink-500 font-medium">
                  Price
                </TableHead>
                <TableHead className="text-pink-500 font-medium">
                  Payment By
                </TableHead>
                <TableHead className="text-pink-500 font-medium text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchases.map((purchase, index) => (
                <TableRow
                  key={purchase.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-pink-50"}
                >
                  <TableCell className="font-medium">
                    {String(purchase.id).padStart(2, "0")}
                  </TableCell>
                  <TableCell>
                    <Image
                      src={"/student/settings/purchase.png"}
                      alt={purchase.courseName}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                  </TableCell>
                  <TableCell>{purchase.courseName}</TableCell>
                  <TableCell>{purchase.date}</TableCell>
                  <TableCell>{purchase.price}</TableCell>
                  <TableCell>{purchase.paymentBy}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      className="bg-pink-500 hover:bg-pink-600 text-white"
                      onClick={() => handleInvoice(purchase.id)}
                    >
                      Invoice
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </StudentSidebarWrapper>
  );
}
