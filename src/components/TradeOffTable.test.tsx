import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { TradeOffTable } from './TradeOffTable';
import { ALL_TRADE_OFFS } from '../data/tradeOffs';

const sample = ALL_TRADE_OFFS[0];

describe('TradeOffTable', () => {
  it('renders all 7 column headers and field rows', () => {
    render(<TradeOffTable tradeOff={sample} />);
    const table = screen.getByRole('table');
    const headers = within(table).getAllByRole('columnheader');
    expect(headers).toHaveLength(8);

    expect(within(table).getByText(sample.columns[0].positionName)).toBeInTheDocument();
    expect(within(table).getByText(sample.columns[3].positionName)).toBeInTheDocument();

    expect(within(table).getByText('Description')).toBeInTheDocument();
    expect(within(table).getByText('Failure signal')).toBeInTheDocument();
    expect(within(table).getByText('The corrective')).toBeInTheDocument();
  });
});
