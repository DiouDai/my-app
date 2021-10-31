//export type CardType = 'TeachingEasy'|'TeachingHard'|'Microaggression'

export interface Card{
    ID:number
    Kind:CardKind
    Prompt:string
    Answer:string
}

export enum CardKind{
    TeachingEasy= "Teaching Prompt Round 1",
    TeachingHard = "Teaching Prompt Round 2",
    Microaggressions= "Microaggresions Round"
}
