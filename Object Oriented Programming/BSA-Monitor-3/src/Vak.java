public class Vak {
    String naam;
    int punten;
    double cijfer;

    Vak(String nieuweNaam, int nieuwePunten) {
        this.naam = nieuweNaam;
        this.punten = nieuwePunten;
    }

    String getNaam(){
        return naam;
    }
    int getPunten(){
        return punten;
    }

    double getCijfer() {
        return cijfer;
    }

    void setCijfer(double nieuweCijfer){
        this.cijfer = nieuweCijfer;
    }

    int gehaaldePunten(double cijfer){
        if (setCijfer(cijfer) < 5.5) {

        }
    }
}
