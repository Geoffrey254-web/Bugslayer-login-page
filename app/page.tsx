"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BRAND, FORM_MESSAGES, FORM_VIEWS } from "@/lib/constants";
import { FormView } from "@/lib/types";
import { SidebarBanner } from "@/components/auth/SidebarBanner";
import { MobileHeader } from "@/components/auth/MobileHeader";
import { FormHeader } from "@/components/auth/FormHeader";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { OAuthButtons } from "@/components/auth/OAuthButtons";

export default function LoginPage() {
  const [currentView, setCurrentView] = useState<FormView>(
    FORM_VIEWS.LOGIN as FormView
  );

  const messages = FORM_MESSAGES[currentView];

  return (
    <div className="min-h-screen flex font-sans">
      {/* Sidebar Banner */}
      <SidebarBanner />

      {/* Main Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Header */}
          <MobileHeader />

          <div className="space-y-6">
            {/* Form Header */}
            <FormHeader
              view={currentView}
              onBack={() => setCurrentView(FORM_VIEWS.LOGIN as FormView)}
            />

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Full Name - Register Only */}
              {currentView === FORM_VIEWS.REGISTER && (
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="h-12 border-gray-200 focus:ring-0 shadow-none rounded-lg bg-white"
                  />
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@company.com"
                  className="h-12 border-gray-200 focus:ring-0 shadow-none rounded-lg bg-white"
                />
              </div>

              {/* Password */}
              {currentView !== FORM_VIEWS.FORGOT && (
                <PasswordInput
                  id="password"
                  label="Password"
                  placeholder="Enter password"
                />
              )}

              {/* Confirm Password - Register Only */}
              {currentView === FORM_VIEWS.REGISTER && (
                <PasswordInput
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm password"
                />
              )}

              {/* Remember Me & Forgot Password - Login Only */}
              {currentView === FORM_VIEWS.LOGIN && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded border-gray-300 cursor-pointer"
                    />
                    <Label
                      htmlFor="remember"
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      Stay logged in
                    </Label>
                  </div>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm hover:text-opacity-80 cursor-pointer"
                    style={{ color: BRAND.COLOR }}
                    onClick={() =>
                      setCurrentView(FORM_VIEWS.FORGOT as FormView)
                    }
                  >
                    Forgot your password?
                  </Button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              className="w-full h-12 text-sm font-medium text-white hover:opacity-90 rounded-lg shadow-none cursor-pointer"
              style={{ backgroundColor: BRAND.COLOR }}
            >
              {messages.SUBMIT}
            </Button>

            {/* OAuth Buttons - Hide on Forgot Password */}
            {currentView !== FORM_VIEWS.FORGOT && (
              <OAuthButtons view={currentView} />
            )}

            {/* Form Switch Links */}
            <div className="text-center text-sm text-muted-foreground">
              {currentView === FORM_VIEWS.LOGIN && (
                <>
                  Don't have an account?{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm hover:text-opacity-80 font-medium cursor-pointer"
                    style={{ color: BRAND.COLOR }}
                    onClick={() =>
                      setCurrentView(FORM_VIEWS.REGISTER as FormView)
                    }
                  >
                    Register now
                  </Button>
                </>
              )}
              {currentView === FORM_VIEWS.REGISTER && (
                <>
                  Already have an account?{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm hover:text-opacity-80 font-medium cursor-pointer"
                    style={{ color: BRAND.COLOR }}
                    onClick={() => setCurrentView(FORM_VIEWS.LOGIN as FormView)}
                  >
                    Log in
                  </Button>
                </>
              )}
              {currentView === FORM_VIEWS.FORGOT && (
                <>
                  Remember your password?{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm hover:text-opacity-80 font-medium cursor-pointer"
                    style={{ color: BRAND.COLOR }}
                    onClick={() => setCurrentView(FORM_VIEWS.LOGIN as FormView)}
                  >
                    Go back to login
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
