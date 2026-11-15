import ViewModel from "../schema/View.model";
import { View, ViewInput } from "../libs/types/view";
import Errors, { HttpCode, Message } from "../libs/Errors";

class ViewService {
  private readonly viewModel;

  constructor() {
    this.viewModel = ViewModel;
  }
  //   oldin ko'rganmi yo'qmi tekshiradigan mantiq
  public async checkViewExistence(input: ViewInput): Promise<View> {
    return await this.viewModel
      .findOne({
        // nega memberID va viewrefID bilan izlayapmiz
        memberId: input.memberId, // agar memberID bo'lmasa osha maxsulotni 1 marta kimdir ko'rsa, ortidan boshqa odam kirib ko'rsa ham  view soni oshmay qoladi. sababi kim korganini saqlab qolmagan
        viewRefId: input.viewRefId, // agar viewRefId ni yozmasa osha meberId dagi odam saytda biror maxsulotni ko'rsa view soni bitta oshadi lekin boshqa maxsulotni korsa oshhmaydi sababi qaysi maxsulotni korganini id sini saqlab qolmagan bo'ladi
      })
      .exec();
  }

  /** *************************************************** */

  public async insertMemberView(input: ViewInput): Promise<View> {
    try {
      return await this.viewModel.create(input);
    } catch (err) {
      console.log("ERROR, model:insertMemberView", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ViewService;
