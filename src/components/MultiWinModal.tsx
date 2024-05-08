import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

type ModalType = {
  open: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MultiWinModal({ open, setModal }: ModalType) {
  return (
    <AlertDialog open={open} onOpenChange={setModal}>
      <AlertDialogContent
        className="w-[90vw] border-none outline-none max-w-[400px] sm:max-w-[524px] md:max-w-[664px] flex flex-col rounded-[0.6rem] bg-gray-300 py-[1.5rem] px-6 sm:rounded-[1.2rem] sm:px-14 sm:py-[2rem] sm:pb-[3rem] opacity-100 scale-100"
        id="headlessui-dialog-panel-:r1b:"
      >
        <h2 className="mt-[0.45rem] text-center text-2xl font-bold text-neutral-800 sm:text-[3rem] sm:leading-[3rem]">
          Player 3 Wins!
        </h2>
        <p className="mt-[0.1rem] text-center text-sm font-bold leading-[14px] sm:leading-[18px] text-neutral-500 sm:mt-[0.7rem] sm:text-[1.125rem]">
          Game over! Here are the results...
        </p>
        <div className="mt-4 md:mt-7 md:mb-0">
          <div className="mt-2 flex items-center justify-between rounded-[0.3125rem] py-3 px-4 first:mt-0 sm:mt-4 sm:py-5 sm:px-8 xl:rounded-[0.5rem] bg-neutral-800 text-white">
            <span className="text-[0.8125rem] font-bold sm:text-[1.125rem] sm:leading-[1.125rem]">
              Player 3 (Winner!)
            </span>
            <span className="text-[1.25rem] font-bold sm:text-[2rem] sm:leading-[2rem]">
              6 Pairs
            </span>
          </div>
          <div
            
            className="mt-2 flex items-center justify-between rounded-[0.3125rem] py-3 px-4 first:mt-0 sm:mt-4 sm:py-5 sm:px-8 xl:rounded-[0.5rem] bg-neutral-200 text-neutral-500"
          >
            <span className="text-[0.8125rem] font-bold sm:text-[1.125rem] sm:leading-[1.125rem]">
              Player 2
            </span>
            <span className="text-[1.25rem] font-bold sm:text-[2rem] sm:leading-[2rem] text-neutral-700">
              2 Pairs
            </span>
          </div>


        </div>
        <div className="flex flex-col sm:hidden">
          <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-primaryy-400 hover:bg-primaryy-300 focus-visible:ring-primaryy-400 text-white py-3 px-6 text-[1.125rem] sm:py-6 sm:text-[2rem] mt-3">
            Restart
          </button>
          <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-400 hover:text-white focus-visible:ring-neutral-200 py-3 px-6 text-[1.125rem] sm:py-6 sm:text-[2rem] mt-3">
            Setup New Game
          </button>
        </div>
        <div className="mt-10 hidden gap-[0.85rem] sm:grid md:grid-cols-2">
          <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-primaryy-400 hover:bg-primaryy-300 focus-visible:ring-primaryy-400 text-white py-2 px-[1.15rem] text-base sm:py-[0.9rem] sm:px-[1.5rem] sm:text-[1.25rem]">
            Restart
          </button>
          <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-400 hover:text-white focus-visible:ring-neutral-200 py-2 px-[1.15rem] text-base sm:py-[0.9rem] sm:px-[1.5rem] sm:text-[1.25rem]">
            Setup New Game
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
