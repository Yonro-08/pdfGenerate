import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import { MyDocumentProps } from "../../types/MyDocumentsTypes";
import { MONTH } from "../../constans/MONTH";
import TextList from "../TextList/TextList";

// Create fonts
Font.register({
  family: "Roman",
  src: "../../../public/assets/Times New Roman Regular.ttf",
  fontWeight: 400,
});
Font.register({
  family: "Roman",
  src: "../../../public/assets/Times New Roman Bold.ttf",
  fontWeight: 700,
});

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: "50px",
    paddingLeft: "90px",
    paddingRight: "30px",
    paddingBottom: "70px",
    fontFamily: "Roman",
    fontSize: 12,
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontWeight: 700,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: 700,
    textIndent: "20px",
  },
  header: {
    marginBottom: "24px",
  },
  headerTitle: {
    marginBottom: "12px",
    textAlign: "center",
    fontWeight: 700,
  },
  headerLocation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  agreement: {
    marginBottom: "12px",
  },
  agreementText: {
    fontWeight: 700,
    textIndent: "20px",
    textAlign: "justify",
  },
  agreementSubtext: {
    fontWeight: 400,
  },
  item: {
    marginBottom: "12px",
  },
  price: {
    marginBottom: "12px",
  },
  responsibility: {
    marginBottom: "12px",
  },
  otherTerms: {
    marginBottom: "12px",
  },
  requisites: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customer: {
    flex: 1,
  },
  executor: {
    flex: 1,
  },
  signature: {
    flexDirection: "row",
  },
});

// Create Document Component
const MyDocument = ({ data }: MyDocumentProps) => {
  const { city, date, paymentMethod, company, contract, customer } = data;
  const itemContract = [
    "1.1. В соответствии с настоящим договором Исполнитель обязуется по заданию Заказчика оказать ему следующие услуги:",
    `${contract.services}`,
    "а Заказчик обязуется оплатить эти услуги.",
    "Оказание услуг производится в порядке и в сроки, установленные настоящим Договором.",
    `1.2. Стороны установили, что услуги, установленные в п. 1.1 Договора, должны быть оказаны не позднее ${contract.expirationDate}.`,
    "1.3. В случае, невозможности исполнения, возникшей по вине Заказчика, услуги подлежат оплате в полном объёме. В случае, когда невозможность исполнения возникла по обстоятельствам, за которые ни одна из сторон не отвечает, Заказчик возмещает Исполнителю фактические им расходы.",
    "1.4. Заказчик вправе отказаться от исполнения настоящего договора при условии оплаты фактически понесённых им расходов.",
  ];
  const lawContract1 = [
    "2.1.1. Оказывать услуги в полном соответствии с условиями настоящего договора.",
    "2.1.2. Информировать Заказчика о ходе оказания услуг по настоящему договору.",
    "2.1.3. Сохранять конфиденциальность о деятельности Заказчика и информации, полученной в ходе оказания услуг по настоящему Договору.",
    "2.1.4. Информировать Заказчика о предполагаемых изменениях и последствиях, которые могут возникнуть у Заказчика в ходе или в результате оказания услуг, если таковые изменения и последствия предвидятся Исполнителем.",
    "2.1.5. В процессе оказания услуг по настоящему Договору руководствоваться интересами Заказчика.",
  ];
  const lawContract2 = [
    "2.2.1. Предоставить Исполнителю всю необходимую для оказания услуг информацию и документы.",
    "2.2.2. Принять и оплатить оказанные услуги в соответствии с условиями настоящего договора.",
  ];
  const priceContract = [
    `3.1. Стоимость оказываемых Исполнителем услуг составляет ${contract.price} руб.`,
    `3.2. Оплата услуг производится в следующем порядке: ${
      paymentMethod === "наличными"
        ? "наличными денежными средствами"
        : `путем безналичного перечисления денежных средств на расчетный счет ${contract.bankDetails.checkingAccount}, открытый в ${contract.bankDetails.name}, БИК: ${contract.bankDetails.BIK}, Корр. счет: ${contract.bankDetails.correspondentAccount}, ИНН: ${customer.INN}, КПП: ${customer.KPP}`
    }.`,
  ];
  const responsibilityContract = [
    "4.1. За неисполнение или ненадлежащее исполнение своих обязательств по настоящему договору стороны несут ответственность в соответствии с действующим законодательству РФ.",
    `4.2. При полной или частичной просрочке оплаты оказанных услуг Заказчик уплачивает Исполнителю пеню в размере ${contract.fine} от неоплаченной суммы за каждый день просрочки.`,
  ];
  const otherTerms = [
    `5.1. Настоящий договор вступает в силу ${"с момента подписания обеими сторонами и действует до момента полного исполнения сторонами своих обязательств"}.`,
    "5.2. Настоящий договор заключён в двух экземплярах, имеющих равную юридическую силу, по одному для каждой из сторон.",
    "5.3. Все вопросы, не урегулированные настоящим договором, разрешаются в соответствии с действующим законодательством РФ.",
    "5.4. Все споры, возникающие в связи с исполнением настоящего договора, разрешаются в судебном порядке в соответствии с действующим законодательством РФ.",
    "5.5. Все изменения и дополнения к настоящему договору вступают в силу с момента под-писания обеими сторонами.",
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ДОГОВОР ОКАЗАНИЯ УСЛУГ</Text>
          <View style={styles.headerLocation}>
            <Text>Город {city}</Text>
            <Text>{`"${date.getDate()}" ${
              MONTH[date.getMonth()]
            } ${date.getFullYear()}`}</Text>
          </View>
        </View>
        <View>
          {/* aggreement */}
          <View style={styles.agreement}>
            <Text style={styles.agreementText}>
              {company.companyName.fullName} в лице директора{" "}
              {company.director.fullName}{" "}
              <Text style={styles.agreementSubtext}>
                действующей на основании Устава, именуемое в дальнейшем
                «Исполнитель», с одной стороны, и {customer.fullName}, паспорт
                серия {customer.series} номер {customer.number}, выдан{" "}
                {customer.issued}, дата выдачи {customer.dateIssue},
                зарегистрирован _________________________ именуемое в дальнейшем
                «Заказчик», с другой стороны заключили настоящий договор о
                нижеследующем.
              </Text>
            </Text>
          </View>
          {/* Item Contract */}
          <View style={styles.item}>
            <Text style={styles.title}>1.Предмет и общие условия договора</Text>
            <TextList data={itemContract} />
          </View>
          {/* Rights and obligations */}
          <View>
            <Text style={styles.title}>2. Права и обязанности сторон</Text>
            <Text style={{ fontWeight: 700, textIndent: "20px" }}>
              2.1. Исполнитель обязуется:
            </Text>
            <TextList data={lawContract1} />
            <Text style={styles.subtitle}>2.2. Заказчик обязуется:</Text>
            <TextList data={lawContract2} />
          </View>
          {/* Cost and payment procedure */}
          <View style={styles.price}>
            <Text style={styles.title}>3. Стоимость и порядок расчётов</Text>
            <TextList data={priceContract} />
          </View>
          {/* Responsibility of the parties */}
          <View style={styles.responsibility}>
            <Text style={styles.title}>4. Ответственность сторон</Text>
            <TextList data={responsibilityContract} />
          </View>
          {/* Other terms of the agreement */}
          <View style={styles.otherTerms}>
            <Text style={styles.title}>5. Прочие условия договора</Text>
            <TextList data={otherTerms} />
          </View>
        </View>
        {/* Signature details of the parties */}
        <View>
          <Text style={[styles.title, { marginBottom: "12px" }]}>
            6.Реквизиты подписи сторон
          </Text>
          <View style={styles.requisites}>
            <View style={styles.customer}>
              <Text style={{ fontWeight: 700 }}>ЗАКАЗЧИК</Text>
              <Text>{customer.fullName}</Text>
              <Text>Банковские реквизиты:</Text>
              <Text>р/с: {contract.bankDetails.checkingAccount}</Text>
              <Text>{contract.bankDetails.name}</Text>
              <Text>Корр. сч: {contract.bankDetails.correspondentAccount}</Text>
              <Text>БИК: {contract.bankDetails.BIK}</Text>
            </View>
            <View style={styles.executor}>
              <Text style={{ fontWeight: 700 }}>ИСПОЛНИТЕЛЬ</Text>
              <Text>{company.companyName.shortName}</Text>
            </View>
          </View>
          <View style={styles.signature}>
            <View style={{ flex: 1, marginTop: "26px" }}>
              <Text> ______________/ ________/ </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 700, marginBottom: "12px" }}>
                Директор
              </Text>
              <Text>______________/ {company.director.shortName}/</Text>
              <Text>М.П</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
