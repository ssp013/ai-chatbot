import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
/* 
Localizacion 
que informacion sobre este vehiculo 

*/
const exampleMessages = [
  {
    heading: 'Que es Copiloto ?',
    message: `En que consiste el software Copiloto desarrollado por Kaufmann"?`
  },
  {
    heading: 'Lista de modelos que conoces',
    message: `Cuántos modelos de camiones manejas"?`
  },
  {
    heading: 'Qué información tienes del modelo ATEGO 1726/42 4X4 (EURO V)',
    message: `Qué información tienes del modelo ATEGO 1726/42 4X4 (EURO V)"?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Bienvenido a J.A.I.ME
        </h1>
       {/*  <p className="mb-2 leading-normal text-muted-foreground">
          subtitulo
        </p> */}
        <p className="leading-normal text-muted-foreground">
        Puedes comenzar la conversación aquí o puedes seguir estos ejemplos: 
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
