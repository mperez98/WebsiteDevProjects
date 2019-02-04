var num1;
var num2;
var guess;
var answer;
var state;
var substate;
var response;
var linkDict = {};

var alabama = {"alabama":[
    {"href": "https://labor.alabama.gov/docs/posters/wc_information.pdf", "text": "Workers' Compensation Notice"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_froi codes.pdf", "text": "WC  Alabama First Report of Injury Codes"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_app_for_cert.pdf", "text": "WC Application for Certification for Bill Screening (Form WC 50)"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_app_self_insur.pdf", "text": "WC Application for Self Insurance (Form WC 18)"},
    {"href": "https://labor.alabama.gov/docs/forms/WCRedirect.aspx", "text": "WC Assessment Form (Instructions)"},
    {"href": "https://labor.alabama.gov/docs/forms/WCRedirect.aspx", "text": "WC Assessment Form (WCC10)"},
    {"href": "https://labor.alabama.gov/docs/forms/WCRedirect.aspx", "text": "WC Assessment Form Cover Letter "},
    {"href": "https://labor.alabama.gov/docs/forms/wcio_cause_table.pdf", "text": "WC Cause of Injury Codes"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_claim_summ_form.pdf", "text": "WC Claim Summary Form (Form WC 4)"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_combination (rev 1-16-02)-1.doc", "text": "WC Combination Supplementary & Claim Summary Form"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_drug_free_cert.pdf", "text": "WC Drug Free Certification of Drug Free Workplace"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_froi_new_with_different_margins.pdf", "text": "WC First Report of Injury (WC Form 2 9/2006)"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_alabama_froi.doc", "text": "WC First Report of Injury (WC Form 2 Rev. 9/2006) *Requires Microsoft Word"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_naics.pdf", "text": "WC NAICS Industry codes"},
    {"href": "https://labor.alabama.gov/docs/forms/wcio_nature_table.pdf", "text": "WC Nature of Injury Codes"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_order_form.pdf", "text": "WC Order Form"},
    {"href": "https://labor.alabama.gov/docs/forms/wcio_part_table.pdf", "text": "WC Part of Body Injury Codes"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_drug_free_recertification.pdf", "text": "WC Re-Certification of Drug Free Workplace"},
    {"href": "https://labor.alabama.gov/docs/forms/wc_supp_report.pdf", "text": "WC Supplementary Report (WC Form 3)"},
    {"href": "https://labor.alabama.gov/docs/guides/wc_drugfree.pdf", "text": "Drug Free, Way to Be Guide (WC 80)"},
    {"href": "https://labor.alabama.gov/docs/guides/wc_mileage_rate.pdf", "text": "Mileage Reimbursement Rate"},
    {"href": "https://labor.alabama.gov/docs/guides/wc_mortality_table.pdf", "text": "Mortality Tables"},
    {"href": "https://labor.alabama.gov/docs/guides/wc_weeklywage.pdf", "text": "State's Average Weekly Wage"},
    {"href": "https://labor.alabama.gov/docs/guides/wc_claimhandling.pdf", "text": "Workers' Compensation Claim Handling Manual"},
    {"href": "https://labor.alabama.gov/docs/law/wc_drug_free_law.pdf", "text": "Law Regarding Drug Free Workplace Program"},
    {"href": "https://labor.alabama.gov/docs/law/wc_mediation_overview.pdf", "text": "Overview Rules of Workers' Compensation Mediation"},
    {"href": "https://labor.alabama.gov/docs/law/wc_drug_free_rules.pdf", "text": "Rules Regarding Drug Free Workplace Program"},
    {"href": "https://labor.alabama.gov/docs/law/wc_group_fund_rules_480-5-3.pdf", "text": "Rules Regarding Group Self-Insurance funds"},
    {"href": "https://labor.alabama.gov/docs/law/wc_4805202_rules.pdf", "text": "Rules Regarding Self-Insured Employers"},
    {"href": "http://labor.alabama.gov/wc/umbs.aspx", "text": "Utilization Management and Bill Screening Rules"},
    {"href": "https://labor.alabama.gov/docs/law/wc_requirements%20of%20registration%20for%20professional%20employer%20organizations%20.pdf", "text": "WC Administrative Code 480-5-7-.01"}
]};

$(document).ready(function() {
    substate = document.getElementById("substate");
    state = document.getElementById("selectedState");

    $("#submitbutton").click(function(){
        substate.innerHTML = state.value;
    });
});

$.each(alabama.alabama,function(index, item){
    console.log("INSERT INTO links(state, href, text)"+ "\n" + "VALUES('Alabama', " + item.href + ", "+ item.text +")");
});

/*function populateDict() {
    for (var i=0; i<51; i++) {
        if (i==0) {
            linkDict[0] = 
        }
        else if (i==1) {
            linkDict[1] = 
        }
        else if (i==2) {
            linkDict[2] = 
        }
        else if (i==3) {
            linkDict[3] = 
        }
        else if (i==4) {
            linkDict[4] = 
        }
        else if (i==5) {
            linkDict[5] = 
        }
        else if (i==6) {
            linkDict[6] = 
        }
        else if (i==7) {
            linkDict[7] = 
        }
        else if (i==8) {
            linkDict[8] = 
        }
        else if (i==9) {
            linkDict[9] = 
        }
        else if (i==10) {
            linkDict[10] = 
        }
        else if (i==11) {
            linkDict[11] = 
        }
        else if (i==12) {
            linkDict[12] = 
        }
        else if (i==13) {
            linkDict[13] = 
        }
        else if (i==14) {
            linkDict[14] = 
        }
        else if (i==15) {
            linkDict[15] = 
        }
        else if (i==16) {
            linkDict[16] = 
        }
        else if (i==17) {
            linkDict[17] = 
        }
        else if (i==18) {
            linkDict[18] = 
        }
        else if (i==19) {
            linkDict[19] = 
        }
        else if (i==20) {
            linkDict[20] = 
        }
        else if (i==21) {
            linkDict[21] = 
        }
        else if (i==22) {
            linkDict[22] = 
        }
        else if (i==23) {
            linkDict[23] = 
        }
        else if (i==24) {
            linkDict[24] = 
        }
        else if (i==25) {
            linkDict[25] = 
        }
        else if (i==26) {
            linkDict[26] = 
        }
        else if (i==27) {
            linkDict[27] = 
        }
        else if (i==28) {
            linkDict[28] = 
        }
        else if (i==29) {
            linkDict[29] = 
        }
        else if (i==30) {
            linkDict[30] = 
        }
        else if (i==31) {
            linkDict[31] = 
        }
        else if (i==32) {
            linkDict[32] = 
        }
        else if (i==33) {
            linkDict[33] = 
        }
        else if (i==34) {
            linkDict[34] = 
        }
        else if (i==35) {
            linkDict[35] = 
        }
        else if (i==36) {
            linkDict[36] = 
        }
        else if (i==37) {
            linkDict[37] = 
        }
        else if (i==38) {
            linkDict[38] = 
        }
        else if (i==39) {
            linkDict[39] = 
        }
        else if (i==40) {
            linkDict[40] = 
        }
        else if (i==41) {
            linkDict[41] = 
        }
        else if (i==42) {
            linkDict[42] = 
        }
        else if (i==43) {
            linkDict[43] = 
        }
        else if (i==44) {
            linkDict[44] = 
        }
        else if (i==45) {
            linkDict[45] = 
        }
        else if (i==46) {
            linkDict[46] = 
        }
        else if (i==47) {
            linkDict[47] = 
        }
        else if (i==48) {
            linkDict[48] = 
        }
        else if (i==49) {
        linkDict[49] = 
        }
        else if (i==50) {
            linkDict[50] = 
        }
    }
}*/