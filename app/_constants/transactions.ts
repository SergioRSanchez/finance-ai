import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABEL = {
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.ENTERTAINMENT]: "Entretenimento",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.OTHER]: "Outros",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.UTILITY]: "Utilidades",
};

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.UTILITY],
  },
];

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência",
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto",
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de Crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de Débito",
  [TransactionPaymentMethod.OTHER]: "Outros",
  [TransactionPaymentMethod.PIX]: "Pix",
};

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
  },
];

export const TRANSACTION_TYPE_LABELS = {
  [TransactionType.EXPENSE]: "Despesa",
  [TransactionType.DEPOSIT]: "Receita",
  [TransactionType.INVESTMENT]: "Investimento",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: TRANSACTION_TYPE_LABELS[TransactionType.EXPENSE],
  },
  {
    value: TransactionType.DEPOSIT,
    label: TRANSACTION_TYPE_LABELS[TransactionType.DEPOSIT],
  },
  {
    value: TransactionType.INVESTMENT,
    label: TRANSACTION_TYPE_LABELS[TransactionType.INVESTMENT],
  },
];
