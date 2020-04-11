import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const evertonWinSummary = new Summary(
  new WinsAnalysis('Everton'), 
  new ConsoleReport()
);

evertonWinSummary.buildAndPrintReport(matchReader.matches);
