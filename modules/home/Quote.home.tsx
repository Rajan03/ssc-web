import { Button } from '@/components';
import { SanityQuoteHome } from '@/types';

const Quote: React.FC<SanityQuoteHome> = ({ title, subtitle }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <div
      className="relative h-[25rem] w-full lg:max-w-[85%] bg-primary-600 rounded-l-lg ml-auto mt-[8rem] p-16 flex justify-between items-center
    gap-8 cursor-pointer hover:bg-primary-700 transition-all duration-300 border-8 border-primary-50 overflow-hidden flex-col md:flex-row"
    >
      {/* TEXT */}
      <div className="flex-1 flex flex-col justify-start items-center md:items-start gap-y-4 min-w-[calc(100%_-_60rem)]">
        <h2 className="text-6xl font-bold text-white">{title}</h2>
        <p className="text-2xl font-medium text-white">{subtitle}</p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="relative flex-1 flex justify-end items-center gap-x-6 z-10"
      >
        <input
          type="text"
          placeholder="Name"
          className="bg-white rounded p-6 outline-none w-[50rem]"
        />
        <Button
          type="submit"
          text="Get a Quote"
          onClick={handleSubmit}
          theme="primary"
          className=" p-4 absolute right-4 rounded"
        />
      </form>
    </div>
  );
};
export default Quote;
