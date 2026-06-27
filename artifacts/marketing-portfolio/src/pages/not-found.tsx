import { Link } from "wouter";
import { AlertCircle, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground px-4">
      <Card className="w-full max-w-md bg-card/50 border-white/10">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">404 Page Not Found</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            This page doesn&apos;t exist. Return to the homepage or book a strategy call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="rounded-full">
              <Link href="/">
                <Terminal size={16} className="mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/10">
              <Link href="/#schedule">Book Free Call</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
