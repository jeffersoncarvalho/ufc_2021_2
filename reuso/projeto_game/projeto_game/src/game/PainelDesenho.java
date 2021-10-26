package game;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;

import javax.swing.JPanel;

public class PainelDesenho extends JPanel{

	private static final long serialVersionUID = 1L;
	private Tabuleiro tabuleiro;

	public PainelDesenho(Tabuleiro tabuleiro) {
		this.setPreferredSize(new Dimension(400,400));
		this.setBackground(Color.white);
		this.tabuleiro = tabuleiro;
	}

	@Override
	public void paint(Graphics g) {
		// TODO Auto-generated method stub
		super.paint(g);
		g.setColor(Color.RED);
		g.fillOval(this.tabuleiro.getHeroi()[0], this.tabuleiro.getHeroi()[1], 20, 20);
	}
	
	public void notifyMe() {
		this.repaint();
	}
}
