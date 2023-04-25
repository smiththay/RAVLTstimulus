// src/controllers/hello_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ['trial1', 'trial2', 'totalRecall']

    updateTotalRecall() {
        const totalRecall = this.trial1() + this.trial2()
        this.totalRecallTarget.value = Number(totalRecall)
    }

    trial1() {
        return parseInt(this.trial1Target.value || 0)
    }

    trial2() {
        return parseInt(this.trial2Target.value || 0)
    }

    totalRecall() {
        return parseInt(this.totalRecallTarget.value)
    }

    console.log('hello')
}

