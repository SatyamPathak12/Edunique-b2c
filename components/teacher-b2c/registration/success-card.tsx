import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Success Card Component
export default function SuccessCard({ successUrl }: { successUrl: string }) {
    // Handle OK button in success state
  const handleOkClick = () => {
    // Reset the form or redirect to login
    window.location.href = successUrl;
  };
    return (
      <Card className="w-full max-w-md mx-auto rounded-2xl">
        <CardContent className="pt-16 flex flex-col items-center text-center relative">
          <div className="w-20 h-20 rounded-full absolute top-0 self-center transform -translate-y-1/2 bg-[#8DD9B3] flex items-center justify-center mb-2">
            <Check className="h-8 w-8 text-white" strokeWidth={4}/>
          </div>
  
          <h2 className="text-3xl font-bold mb-6">Thank You!</h2>
  
          <p className="text-sm w-64">
            Your details have been successfully submitted. Thanks!
          </p>
  
          <Button
            onClick={handleOkClick}
            className="w-40 rounded-full mt-4 bg-[#3366FF] hover:bg-blue-700"
          >
            OK
          </Button>
        </CardContent>
      </Card>
    );
  }