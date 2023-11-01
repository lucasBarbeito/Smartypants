export interface BarGraphProps {
    text: string
}

export interface BarProps {

}

const Bar = () => {
  return (
    <div className={'flex flex-1 bg-success w-1/12 rounded-lg'}>

    </div>
  )
}
const BarGraph = ({text}:BarGraphProps) => {
    return (
        <div className="flex bg-primary-400 h-64 w-64">
          <div className="flex flex-row h-64 w-64">
            <div className="w-1/4 h-full bg-success flex-1"></div>
            <div className="w-1/4 h-full bg-success flex-1"></div>
            <div className="w-1/4 h-full bg-success flex-1"></div>
            <div className="w-1/4 h-full bg-success flex-1"></div>
          </div>
        </div>
    )
}

export default BarGraph
