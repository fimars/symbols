import { X48 } from 'apps/symbol/app/48x';

export function XWindow(props: {
  children?: React.ReactNode;
  menuBar?: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen text-white bg-black flex flex-row flex-nowrap">
      <div className="flex-shrink-0 p-2 w-screen md:h-screen md:w-auto">
        <div className="flex-col p-2 gap-4">
          <X48>😋</X48>
          <X48>😋</X48>
          <X48>😋</X48>
          {props.menuBar}
        </div>
      </div>
      <div className="flex-grow bg-gray-700">
        {/* {props.children} */}
        <div className="p-4 bg-black leading-relaxed">
          67538ce0-90c9-462d-90d2-82fed24369e3
        </div>
        <div>
          <div className="size-[640px] m-10 border border-gray-100 border-solid"></div>
        </div>
      </div>
    </div>
  );
}
