import { StaticPageLayout } from "./staticPageLayout/StaticPageLayout";

// TODO: this is a temp component and will be removed after StaticPageLayout tested successfully
export function TestLayout() {
  return (
    <StaticPageLayout>
      {/* <StaticPageLayout background="red"> */}
      <div>TestLayout - 1</div>
      <div>TestLayout - 2</div>
      <div>TestLayout - 3</div>
      <div>TestLayout - 4</div>
      <div>TestLayout - 5</div>
    </StaticPageLayout>
  );
}

export default TestLayout;
