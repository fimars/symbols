export function X48(props: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white font-mono text-2xl border border-solid border-white rounded size-12">
      <div className="text-4xl">{props.children}</div>
    </div>
  );
}
