package game;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.JFrame;

public class FramePrincipal extends JFrame {

	private static final long serialVersionUID = 1L;
	private PainelDesenho painelDesenhoUm,painelDesenhoDois;
	private Tabuleiro tabuleiro;
	private EventoTeclado eventoTeclado;

	public FramePrincipal() {

		super("Projeto Game!");
		Container c = this.getContentPane();
		c.setLayout(new BorderLayout());
		//this.setResizable(false);
		
		//tabuleiro
		this.tabuleiro = new Tabuleiro();
		
		//painel de desenho
		this.painelDesenhoUm = new PainelDesenho(this.tabuleiro);
		this.painelDesenhoDois = new PainelDesenho(this.tabuleiro);
		c.add(this.painelDesenhoUm, BorderLayout.WEST);
		c.add(this.painelDesenhoDois, BorderLayout.EAST);
		
		//evento do teclado
		this.eventoTeclado = new EventoTeclado(this.tabuleiro);
		this.eventoTeclado.registerObserver(painelDesenhoUm);
		this.eventoTeclado.registerObserver(painelDesenhoDois);
		this.addKeyListener(this.eventoTeclado);

		this.setVisible(true);
		this.pack();

		this.addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});

	}
	
	public static void main(String[] args) {
		new FramePrincipal();
	}
}
