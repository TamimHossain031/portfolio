export default function HeadOfData({head}) {
  return (
    <>
      <div className="flex gap-6">
        <h1 className="text-xl font-semibold mb-3">{head}</h1>
        <span className="w-[180px] h-[3px] rounded-full inline-block bg-red-400 mt-4"></span>
      </div>
    </>
  );
}
