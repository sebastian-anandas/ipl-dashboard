package io.seb.model;

//import jakarta.persistence.Entity;
//import jakarta.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Match {
    @Id
    private long id;
    private String season;
    private LocalDate date;
    private String team1;
    private String team2;
    private String tossWinner;
    private String tossDecision;
    private String winner;
    private String resultMargin;
    private String winByRuns;
    private String winByWickets;
    private String playerOfMatch;
    private String venue;
    private String umpire1;
    private String umpire2;
    private String umpire3;
}
