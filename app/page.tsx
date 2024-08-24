import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
``;

export default function Home() {
  return (
    <Container>
      <a name="Product" />
      <Hero />
      <a name="Features" />
      <SectionTitle preTitle="Our Benefits" title=" Why Briefly?">
        Briefly transforms the way professionals capture and manage their notes
        and voice recordings. Designed for ease of use and maximum productivity,
        it simplifies communication, making every interaction count.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      <a name="Testimonials" />
      <SectionTitle
        preTitle="Testimonials"
        title={"Here's What Our Customers Are Saying"}
      >
        Hear from some of our satisfied customers about how Briefly has made a
        difference in their daily lives.
      </SectionTitle>

      <Testimonials />

      <a name="FAQ" />
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        {
          "Got questions about Briefly? We've got answers! Here are some of the most common questions we receive from our users. If you need more help, feel free to reach out to our support team."
        }
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
