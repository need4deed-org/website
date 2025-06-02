interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function PageLayout({ children }: Props) {
  return (
    <div>
      <h1>Very important page</h1>
      {children}
    </div>
  );
}
