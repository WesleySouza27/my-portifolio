import perfil from '../assets/perfilsolido.png'
import growflixImg from '../assets/growflix.png'
import rickAndMortyImg from '../assets/rickAndMorty.png'
import chatGeminiImg from '../assets/chatGemini.png'
import growtweetImg from '../assets/growtweeter.png'
import pokedex from '../assets/pokedex.png'
import Icon from '@mdi/react';
import { mdiInstagram } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { ProjectCard } from '@/components/ProjectCard';




export function Home() {
    return (
        <div className="flex-1 min-h-screen">
            <nav className="bg-gray-900 text-white px-4 md:px-8 py-4 flex gap-12 justify-between items-center fixed w-full z-10 shadow">
                <span className="font-bold text-l  md:text-2xl">Wesley</span>
                <div className="flex w-full gap-3 text-end md:gap-8">
                    <a href="#main" className="hover:text-blue-400 transition">Home</a>
                    <a href="#sobre-mim" className="hover:text-blue-400 transition">About</a>
                    <a href="#projetos" className="hover:text-blue-400 transition">Projects</a>
                    <a href="#contato" className="hover:text-blue-400 transition">Contact</a>
                </div>
            </nav>
            <main id='main' className="h-screen md:h-screen flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-20  md:pt-32 pb-60 md:pb-16 max-w-6xl w-full mx-auto px-4">
                <section className="md:w-1/2 w-full ">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">Hello I'm Wesley S.</h1>
                    <h2 className="text-2xl md:text-4xl mb-6">I'm a software developer.</h2>
                    <p className="text-lg md:text-4xl mb-6 text-gray-700">I love technology and all the incredible possibilities it brings to our lives</p>
                    <div className="flex gap-4 text-blue-500 text-3xl">
                        <a href="#" className="hover:underline"><Icon path={mdiLinkedin} size={2} /></a>
                        <a href="#" className="hover:underline"><Icon path={mdiGithub} size={2} /></a>
                        <a href="#" className="hover:underline"><Icon path={mdiInstagram} size={2} /></a>
                    </div>
                </section>
                <div className="md:w-1/2 w-full flex justify-center">
                    <img src={perfil} alt="Wesley S." className="w-70 h-70 md:w-100 md:h-100 rounded-full object-cover shadow-lg" />
                </div>
            </main>
            <section id='sobre-mim' className='h-screen grid grid-cols-1 md:grid-cols-2 gap-40 pt-1 pr-10 pl-4 md:pt-80 max-w-6xl mx-auto py-12'>
                <div>
                    <h2 className="text-3xl md:text-7xl font-bold mb-4">Sobre Mim</h2>
                    <p className="text-2xl md:text-3xl text-gray-700">Sou um desenvolvedor de software apaixonado por criar soluções inovadoras.
                        tenho experiencia em desenvolvimento web, com foco em React e Node.js.
                        atuo na criação de aplicações escaláveis e de alto desempenho.
                    </p>
                </div>
                <div>
                    <h2 className="text-center text-3xl md:text-5xl font-bold mb-4">Habilidades</h2>
                    <div className='flex  gap-8'>
                        <div className='rounded-2xl border-2 border-gray-300 p-4'>
                            <h3 className="text-2xl md:text-4xl font-semibold">Frontend</h3>
                            <ul className="text-xl md:text-3xl list-none ml-4 text-gray-600">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                        <div className='rounded-2xl border-2 border-gray-300 p-4'>
                            <h3 className="text-2xl md:text-4xl font-semibold">Backend</h3>
                            <ul className="text-xl md:text-3xl list-none ml-4 text-gray-600">
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>PostgreSQL</li>
                                <li>Nest.js</li>
                                <li>Prisma</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section id='projetos' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 pt-30 px-6 max-w-6xl mx-auto justify-items-center'>
                <ProjectCard
                    title="growflix"
                    image={growflixImg}
                    description="Descrição do projeto 1"
                    link="https://projeto-growflix.vercel.app/"
                />
                <ProjectCard
                    title="Rick and Morty"
                    image={rickAndMortyImg}
                    description="Descrição do projeto 2"
                    link="https://apiricyandmorty.onrender.com"
                />
                <ProjectCard
                    title="Chat Gemini"
                    image={chatGeminiImg}
                    description="Descrição do projeto 3"
                    link="https://frontend-gemini-api.vercel.app/"
                />
                <ProjectCard
                    title="Growtweeter"
                    image={growtweetImg}
                    description="Descrição do projeto 4"
                    link="https://grow-tweeter-full-stack.vercel.app/login"
                />
                <ProjectCard
                    title="Pokedex"
                    image={pokedex}
                    description="Descrição do projeto 4"
                    link="https://pokedex-one-woad.vercel.app/"
                />
            </section>
            <section id="contato" className="max-w-xl mx-auto my-16 px-4 py-10 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">Entre em Contato</h2>
                <form
                    action="https://formspree.io/f/xkgqgqqn"
                    method="POST"
                    className="flex flex-col gap-4"
                >
                    <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                    type="email"
                    name="email"
                    required
                    placeholder="Seu e-mail"
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                    name="message"
                    required
                    placeholder="Sua mensagem"
                    rows={5}
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                    Enviar
                    </button>
                </form>
            </section>
            <footer className="bg-gray-900 text-white text-center py-4 mt-16">
                © {new Date().getFullYear()} Wesley S. - Todos os direitos reservados
            </footer>
            <a
              href="https://wa.me/5575998937900?text=Ol%C3%A1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transform transition-all"
            >
              <Icon path={mdiWhatsapp} size={1.6} />
            </a>
        </div>
    );
}
