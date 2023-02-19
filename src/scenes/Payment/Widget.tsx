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
      <div className="flex flex-col items-center mb-2">
        <h3 className="text-lg text-center font-medium">
          {nickname} donated {amount} TON
        </h3>
        <p className="text-base text-center">{text}</p>
      </div>
    </div>
  )
}
