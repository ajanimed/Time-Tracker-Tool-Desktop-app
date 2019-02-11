import React, { Component } from 'react';
import {Button,Col,Row} from 'reactstrap';
import {desktopCapturer} from 'electron';
import save from 'save-file/sync';
class DefaultLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    handleStream (stream) {

      for(let i=0;i<stream.length;i++){
          let img = stream[i].thumbnail.toPNG(stream);
          save(img, 'src/screenshots/'+'screenshot'+i+'.png');
          document.getElementById('imgs').insertAdjacentHTML('beforeend','<h1>Name: '+stream[i].name+'</h1><br><img id="img'+i+'" src="#" ><hr>');
          let image =  document.getElementById('img'+i);
          image.src='screenshots/'+'screenshot'+i+'.png';
      }
    }
    handleError (e) {
        console.log(e)
    }
    test(){


        desktopCapturer.getSources({thumbnailSize:{width:1020,height:800}, types: ['window'] }, (error, sources) => {
            if (error) throw error
            //for (let i = 0; i < sources.length; ++i) {
                this.handleStream(sources);
           // }
        })
    }
    render() {
        return (
            <div>
                <Col>
                    <Row>
                        <Button onClick={()=>this.test()} color="primary">Start Test</Button>
                    </Row>
                </Col>
                <div id="imgs">

                </div>
            </div>

        );
    }
}

export default DefaultLayout;

