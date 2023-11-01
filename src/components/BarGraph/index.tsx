export interface BarGraphProps {
    text: string
}

export interface BarProps {
  percentage : number
}

const BarGraph = ({text}:BarGraphProps) => {
  const percentage = 10
    return (
        <div className="flex bg-primary-400 h-64 w-64">
          <div className="flex flex-row px-12 gap-2 py-6 h-64 w-64">
            <Bar percentage={20}/>
            <Bar percentage={40}/>
            <Bar percentage={20}/>
            <Bar percentage={20}/>
          </div>
        </div>
    )
}

const Bar = ({percentage}:BarProps) => {
  return (
    <div className="flex flex-col flex-1 ">
      <div className={'flex-1'}></div>
      <div className={`bg-success h-[${percentage}%] rounded-lg`}></div>
      <p className={'text-center'}>A</p>
    </div>
  )
}

export default BarGraph
