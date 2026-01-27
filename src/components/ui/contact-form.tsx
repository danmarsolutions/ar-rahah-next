"use client";
import CountryList from "country-list-with-dial-code-and-flag";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Check, ChevronsRight, ChevronsUpDown } from "lucide-react";
import React from "react";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Full name must be at least 2 characters.",
    })
    .max(100, {
      message: "Full name must not exceed 100 characters.",
    }),

  email: z.string().email({
    message: "Please enter a valid email address.",
  }),

  dialCode: z.string().min(1, {
    message: "Dial code is required.",
  }),

  receiveMarketingEmails: z.boolean().optional(),

  phoneNumber: z
    .string()
    .min(7, {
      message: "Phone number must be at least 7 digits.",
    })
    .max(15, {
      message: "Phone number must not exceed 15 digits.",
    })
    .regex(/^\d+$/, {
      message: "Phone number must contain only digits.",
    }),

  address: z.string().optional(),

  bestTimeToContact: z.string().optional(),

  message: z.string().optional(),
});

const countryCodes = CountryList.getAll()
  .filter((value) => !value.secondary)
  .map((country) => ({
    dialCode: `${country.code} ${country.dialCode}`,
    svgSrc: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`,
  }));

const DEFAULT_MAP =
  "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg";

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      dialCode: "US +1",
      phoneNumber: "",
      address: "",
      bestTimeToContact: "",
      message: "",
      receiveMarketingEmails: false,
    },
  });

  const [isSuccess, setIsSuccess] = React.useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSuccess(true);
  }

  const formLabelClassName = "text-lg font-inter-tight font-semibold";
  const inputClassName = "h-12 font-albert-sans md:text-base";
  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-16 lg:space-y-20"
        aria-label="Contact form"
      >
        {!isSuccess && (
          <div className="w-full space-y-8">
            <div className="w-full flex flex-col md:flex-row gap-6">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className={formLabelClassName}>
                      Full Name*
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={inputClassName}
                        placeholder="Enter your full name..."
                        aria-required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Email Address */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className={formLabelClassName}>
                      Email Address*
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={inputClassName}
                        placeholder="Enter your email address..."
                        aria-required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormLabel className={formLabelClassName}>
                Phone Number*
              </FormLabel>
              <div className="flex flex-row gap-4">
                {/* Dial Code */}
                <FormField
                  control={form.control}
                  name="dialCode"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className="w-fit h-12 justify-between p-0"
                            >
                              <div
                                className="size-6 overflow-hidden rounded-full"
                                aria-hidden
                              >
                                <img
                                  className="aspect-square object-cover"
                                  alt=""
                                  src={
                                    field.value
                                      ? countryCodes.find(
                                          (country) =>
                                            country.dialCode ===
                                            field.value,
                                        )?.svgSrc
                                      : DEFAULT_MAP
                                  }
                                />
                              </div>
                              <ChevronsUpDown className="opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput
                              placeholder="Search Dial Code..."
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>
                                No code found.
                              </CommandEmpty>
                              <CommandGroup>
                                {countryCodes.map((country) => (
                                  <CommandItem
                                    className="w-full flex flex-row"
                                    value={country.dialCode}
                                    key={country.dialCode}
                                    onSelect={() => {
                                      form.setValue(
                                        "dialCode",
                                        country.dialCode,
                                      );
                                    }}
                                  >
                                    <div
                                      className="size-8 overflow-hidden rounded-full"
                                      aria-hidden
                                    >
                                      <img
                                        className="aspect-square object-cover"
                                        alt=""
                                        src={country.svgSrc}
                                      />
                                    </div>
                                    {country.dialCode}
                                    <Check
                                      className={cn(
                                        "ml-auto",
                                        country.dialCode ===
                                          field.value
                                          ? "opacity-100"
                                          : "opacity-0",
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Phone Number */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          className={inputClassName}
                          placeholder="Enter your phone number..."
                          aria-required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClassName}>
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={inputClassName}
                      placeholder="Enter your full address..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Best Time */}
            <FormField
              control={form.control}
              name="bestTimeToContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formLabelClassName}>
                    Best Time to Contact You
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger className="!h-12 text-base">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="anyTime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formLabelClassName}>
                    Your Message (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ask us anything for trips..."
                      className="resize-none h-28 md:text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Checkbox */}
            <FormField
              control={form.control}
              name="receiveMarketingEmails"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row md:items-center gap-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="font-normal font-albert-sans leading-5 sm:leading-4">
                      I&apos;d like to receive trip updates, offers,
                      and travel inspiration from Ar Rahah. (Optional
                      for mailing list signup)
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          </div>
        )}
        {isSuccess ? (
          <p className="font-albert-sans text-lg text-muted-foreground">
            Thank you! We&apos;ll be in touch soon.
          </p>
        ) : (
          <Button
            className="h-fit w-full md:w-fit font-inter-tight font-semibold text-base rounded-full py-3 lg:py-4 md:!px-6 cursor-pointer transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <span>{isSubmitting ? "Sending..." : "Submit"}</span>
              {!isSubmitting && <ChevronsRight aria-hidden />}
            </div>
          </Button>
        )}
      </form>
    </Form>
  );
}
