import './threejs-override.js'
import { Game } from './Game/Game.js'

if(import.meta.env.VITE_GAME_PUBLIC)
    window.game = new Game()
else
    new Game()