export const Widget: React.FC<{
  nickname: string
  amount: number
  text: string
}> = ({ nickname, amount, text }) => {
  return (
    <div className="bg-transparent text-black w-[500px] p-4 rounded-lg">
      <div className="flex flex-col items-center mb-4">
        <iframe
          src="https://giphy.com/embed/oNFP9kltPi7fp8TUAV"
          width="480"
          height="269"
          allowFullScreen></iframe>
      </div>
      <div className="flex flex-col items-center mb-2 rounded-xl text-white bg-[rgba(0,0,0,.7)] p-4">
        <h3 className="text-[32px] text-center font-medium m-0 p-0">
          {nickname} donated {amount} TON
        </h3>
        <p className="text-base text-center text-[24px] leading-8 mt-2">
          {text}
        </p>
      </div>
    </div>
  )
}
