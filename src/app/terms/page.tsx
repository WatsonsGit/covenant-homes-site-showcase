import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of covenanthomesphilly.com.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Legal"
      title="Terms of Service"
      intro="Terms governing your use of this website."
      todoNote="Draft full ToS covering website use, lead submission, no guarantee of offer, dispute resolution."
    />
  );
}
