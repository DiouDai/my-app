import {Col} from 'react-bootstrap';
import { Card } from '../interfaces/card';


export function CardViewer({card}:{card:Card}):JSX.Element{
    return <Col>
    <h1>CardViewer</h1>
    <div>Prompt: {card.prompt} </div>
    <div>Suggested Answer: {card.answer}</div>
    </Col>
}