import React, { useId } from 'react';

/**
 * InputBox Component
 * Accepts: label, amount, currency options, and handlers
 */

const InputBox = ({
    label,
    amount = 0, // Default amount to prevent uncontrolled input issues
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = '',
}) => {
    const id = useId();

    return (
        <div className={`flex bg-white p-3 rounded-lg text-sm items-center gap-3 ${className}`}>
            {/* Amount Input */}
            <div className="w-1/2">
                <label htmlFor={id} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    type="number"
                    id={id}
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency Dropdown */}
            <div className="w-1/2 flex flex-col items-end text-right">
                <p className="text-black/40 mb-2">Currency Type</p>
                <select
                    className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default InputBox;
