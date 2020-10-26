import React, { Component } from 'react'

export default class AdminList extends Component {
    render() {

        var { item2, index } = this.props;
        return (

            <div style={{ width: '100%' }}>
                <div className="col-12 mt-2" style={{ width: '100%' }}>
                    <div className="float-left p-0" style={{ width: '160px', height: '100px' }}>
                        <img src={item2.image} width="100%" height="100%" />
                    </div>
                    <div className="float-right" style={{ width: 'calc(100% - 160px)', height: '100px', background: '#ccc' }}>
                        <p style={{ width: '100%', }}>{item2.title}</p>
                        <div className="btn btn-primary">Sua</div>
                        <div className="btn btn-primary">Xoa</div>
                    </div>
                </div>
            </div>

        )
    }
}
