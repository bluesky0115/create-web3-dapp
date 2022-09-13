import { SmartContractStandard } from "../smartContractsWizard/utils/smartContractStandards.js";
import { SmartContractInfo } from "../../interfaces/smartContractInfo.js";
import { ERC721smartContractInfo } from "../../interfaces/ERC721smartContractInfo.js";
import { ERC20smartContractInfo } from "../../interfaces/ERC20smartContractInfo.js";
import { BuilderContext } from "../../interfaces/BuilderContext.js";
import { DappInfo } from "../../interfaces/dappInfo.js";
const contractInfo:
	| SmartContractInfo
	| ERC721smartContractInfo
	| ERC20smartContractInfo
	| undefined = {
	name: "",
	symbol: "",
	standard: SmartContractStandard.ERC721,
	isMintable: true,
	isBurnable: false,
	isPausable: false,
	isVotes: false,
	isOwnable: false,
	isRoles: false,
};
const dappInfo: DappInfo = {
	chain: "",
	isEVM: true,
	isTestnet: false,
	useBackend: false,
	backendProvider: "",
	toolkitType: undefined,
	hasSmartContract: false,
	modules: null,
	alchemyAPIKey: "demo",
};

const projectName = "";
const resolvedProjectPath = "";

const context: BuilderContext = {
	contractInfo,
	dappInfo,
	projectName,
	resolvedProjectPath,
};

export default context