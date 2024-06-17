import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export default function SkillCard(){
    return (
        <div className="flex flex-col border shadow p-8 rounded-lg">
            <FontAwesomeIcon className="w-10 h-10 self-end" icon={faDatabase} style={{color: "#498F7E"}}/>
            <h2 className="text-2xl font-medium py-1">Backend</h2>
            <p className="text-black text-opacity-50 w-96">As a professional developer I specialize in backend development using golang, C#, and Visual Basic</p>
        </div>
    )
}