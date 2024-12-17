import Image from 'next/image';
import { Button } from '../_components/ui/button';

const LoginPage = () => {
  return ( 
    <div className="grid grid-cols-2 h-full">
      {/* ESQUERDA */}
      <div className="flex flex-col h-full justify-center p-8 max-w-[550px] mx-auto">
        <Image 
          src="/logo.svg"
          alt="Finance.ai"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-3">Bem Vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <Image 
            src="/social-icons.png"
            alt="Google icon"
            width={20}
            height={20}
            className="mr-2"
          />
          Entrar com Google
        </Button>
      </div>

      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image 
          src="/login.png" 
          alt="Make login" 
          fill 
          className="object-cover"
        />
      </div>
    </div>
  );
}
 
export default LoginPage;