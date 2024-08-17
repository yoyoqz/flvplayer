import FLVPlayer from './FLVPlayer'
import './index.css'

function PlayerList () {
    return (
        <div className="box">
        <div className="item">
        <FLVPlayer></FLVPlayer>
        </div>
        <div className="item">
        <FLVPlayer></FLVPlayer>
        </div>
        <div className="item">
          <FLVPlayer></FLVPlayer>
        </div>
        <div className="item">
        <FLVPlayer></FLVPlayer>
        </div>
    
        <div className="item">
        <FLVPlayer></FLVPlayer>
        </div>
        <div className="item">
        <FLVPlayer></FLVPlayer>
        </div>
        <div className="item">
          <FLVPlayer></FLVPlayer>
        </div>
        <div className="item">
        <FLVPlayer></FLVPlayer>
        </div>    
      </div>
    )
}

export default PlayerList;