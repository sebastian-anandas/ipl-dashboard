package io.seb.data;

import io.seb.model.Match;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

    private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

    @Override
    public Match process(final MatchInput matchInput) {

        Match match = new Match();
        match.setId(Long.parseLong(matchInput.getId()));

        match.setSeason(matchInput.getSeason());

        String dateStr = matchInput.getDate();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        LocalDate date = LocalDate.parse(dateStr, formatter);
        match.setDate(date);

//        match.setDate(LocalDate.parse(matchInput.getDate()));

        // set team1 and team2 depending on the inning order
        String firstInningsTeam, secondInningsTeam;

        if("bat".equals(matchInput.getToss_decision())) {
            firstInningsTeam = matchInput.getToss_winner();
            secondInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1())
                    ? matchInput.getTeam2() : matchInput.getTeam1();
        } else {
            secondInningsTeam = matchInput.getToss_winner();
            firstInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1())
                    ? matchInput.getTeam2() : matchInput.getTeam1();
        }

        match.setTeam1(firstInningsTeam);
        match.setTeam2(secondInningsTeam);

        match.setTossWinner(matchInput.getToss_winner());
        match.setTossDecision(matchInput.getToss_decision());

        match.setWinner(matchInput.getWinner());

        String matchResult;
        if ("0".equals(matchInput.getWin_by_runs())) {
            matchResult = matchInput.getWin_by_wickets() + " Wickets";
        } else if ("0".equals(matchInput.getWin_by_wickets())) {
            matchResult = matchInput.getWin_by_runs() + " Runs";
        } else {
            matchResult = "Match Drawn";
        }
        match.setResultMargin(matchResult);

        match.setWinByRuns(matchInput.getWin_by_runs());
        match.setWinByWickets(matchInput.getWin_by_wickets());

        match.setPlayerOfMatch(matchInput.getPlayer_of_match());
        match.setVenue(matchInput.getVenue());

        match.setUmpire1(matchInput.getUmpire1());
        match.setUmpire2(matchInput.getUmpire2());
        match.setUmpire3(matchInput.getUmpire3());

        return match;

    }

}