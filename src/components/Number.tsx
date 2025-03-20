type NumberProps = {
  nomor: number;
};

function Number({ nomor }: NumberProps) {
  return (
    <div className="w-8 h-8 rounded-full bg-accent-light flex flex-col items-center justify-center text-light font-bold">
      {nomor}
    </div>
  );
}
export default Number;
