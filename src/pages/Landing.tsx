import {
  AppContainer,
  SectionContainer,
} from "../components/styled/containers";

import { VolunteeringCategoriesSection } from "../components/VolunteeringCategories";

export default function Landing() {
  return (
    <AppContainer>
      <SectionContainer>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </p>

        <p>
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked.
          &quot;What&rsquo;s to to me?&quot; he thought. It wasn&rsquo;t a
          dream.
        </p>

        <p>
          His room, a proper human room although a little too small, lay
          peacefully between its four familiar walls. A collection of textile
          samples lay spread out on the table - Samsa was a travelling salesman
          - and above it there hung a picture that he had recently cut out of an
          illustrated magazine and housed in a nice, gilded frame. It showed a
          lady fitted out with a fur hat and fur boa who sat upright, raising a
          heavy fur muff that covered the whole of her lower arm towards the
          viewer. Gregor then turned to look out the window at the dull weather.
          Drops
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            margin: "1rem auto",
            outline: "1px solid black",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "5rem",
              height: "5rem",
              backgroundColor: "var(--color-midnight, 'red')",
              outline: "1px solid black",
            }}
          />
          <span
            style={{
              display: "inline-block",
              width: "5rem",
              height: "5rem",
              backgroundColor: "var(--color-midnight-light, 'red')",
              outline: "1px solid black",
            }}
          />
          <span
            style={{
              display: "inline-block",
              width: "5rem",
              height: "5rem",
              backgroundColor: "var(--aubergine, 'red')",
              outline: "1px solid black",
            }}
          />
          <span
            style={{
              display: "inline-block",
              width: "5rem",
              height: "5rem",
              backgroundColor: "var(--aubergine-light, 'red')",
              outline: "1px solid black",
            }}
          />
          <span
            style={{
              display: "inline-block",
              width: "5rem",
              height: "5rem",
              backgroundColor: "var(--color-orchid, 'red')",
              outline: "1px solid black",
            }}
          />
          <span
            style={{
              display: "inline-block",
              width: "5rem",
              height: "5rem",
              backgroundColor: "var(--color-orchid-light, 'red')",
              outline: "1px solid black",
            }}
          />
          <span
            style={{
              display: "inline-block",
              width: "5rem",
              height: "5rem",
              backgroundColor: "var(--color-sand, 'red')",
              outline: "1px solid black",
            }}
          />
          <span
            style={{
              display: "inline-block",
              width: "5rem",
              height: "5rem",
              backgroundColor: "var(--color-magnolia, 'red')",
              outline: "1px solid black",
            }}
          />
          <span
            style={{
              display: "inline-block",
              width: "5rem",
              height: "5rem",
              backgroundColor: "var(--color-papaya, 'red')",
              outline: "1px solid black",
            }}
          />
        </div>
        <VolunteeringCategoriesSection />
      </SectionContainer>
    </AppContainer>
  );
}
