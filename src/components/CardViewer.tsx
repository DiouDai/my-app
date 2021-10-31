import {Col} from 'react-bootstrap';
import { Card } from '../interfaces/card';


export function CardViewer({card}:{card:Card}):JSX.Element{
    return <Col>
    <h1>CardViewer</h1>
    <div>Current Card: {card.Prompt} </div>
    </Col>
}