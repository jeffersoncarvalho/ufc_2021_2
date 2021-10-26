package game;

import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.List;

public class EventoTeclado extends KeyAdapter {

	private Tabuleiro tabuleiro;
	private List<PainelDesenho> observers = new ArrayList<PainelDesenho>();
	
	public EventoTeclado(Tabuleiro tabuleiro) {
		this.tabuleiro = tabuleiro;
	}
	
	@Override
	public void keyPressed(KeyEvent e) {
		int key = e.getKeyCode();

		switch (key) {
		case KeyEvent.VK_LEFT:
			// esquerda
			this.tabuleiro.heroILEFT();
			break;
		case KeyEvent.VK_RIGHT:
			// direita
			this.tabuleiro.heroiRIGHT();
			break;
		case KeyEvent.VK_UP:
			// cima
			this.tabuleiro.heroiUP();
			break;
		case KeyEvent.VK_DOWN:
			// baixo
			this.tabuleiro.heroiDOWN();
			break;
		}// switch
		this.notifyObservers();
	}

	public void notifyObservers() {
		for (PainelDesenho painelDesenho : observers) {
			painelDesenho.notifyMe();
		}
	}
	
	public void registerObserver(PainelDesenho observer) {
		this.observers.add(observer);
	}
}
