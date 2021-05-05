import React from "react";
import { Printer, CaretDownFill, Plus } from 'react-bootstrap-icons';
import './home.scss'
const HomeBody = () => {

    return (
        <div className='home-component'>
            <div className="contents-head">
                <h1>
                    <span>BOARD</span>
                    <div className='btns'>
                        <div className='btn btn1'>
                            <span>Print</span>
                            <Printer color="#444" size={15} />
                        </div>
                        <div className='btn btn2'>
                            <span>Exports</span>
                            <CaretDownFill color="#444" size={15} />
                        </div>
                        <div className='btn btn3'>
                            <span>Create Board</span>
                            <Plus color="#fff" size={15} />
                        </div>
                    </div>
                </h1>

                <div className='searchs'>
                    <input type='text' placeholder='제목,작성자 검색'/>
                    <input type='text' placeholder='제목,작성자 검색'/>
                    <input type='text' placeholder='제목,작성자 검색'/>
                </div>
                <div className='board-ch'>
                    LNB
                </div>
            </div>
            <div className="content-body">123</div>
        </div>
    )
}

export default HomeBody;