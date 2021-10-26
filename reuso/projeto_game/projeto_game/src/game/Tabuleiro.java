package game;

public class Tabuleiro {

	private int heroi[] = { 200, 200 };
	private int passo = 5;

	public Tabuleiro() {

	}

	public void heroiUP() {
		this.heroi[1] = this.heroi[1] - this.passo; 
	}

	public void heroiDOWN() {
		this.heroi[1] = this.heroi[1] + this.passo;
	}

	public void heroILEFT() {
		this.heroi[0] = this.heroi[0] - this.passo;
	}

	public void heroiRIGHT() {
		this.heroi[0] = this.heroi[0] + this.passo;
	}
	
	public int[] getHeroi() {
		return heroi;
	}



}
